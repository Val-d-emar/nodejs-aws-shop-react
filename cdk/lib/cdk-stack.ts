import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as path from "path";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Creating an S3 bucket for hosting
    const bucket = new s3.Bucket(this, "MyStoreBucket", {
      // Setting up the bucket as a website
      //websiteIndexDocument: "index.html",
      // Setting up automatic bucket deletion when deleting the stack
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      // Automatic file cleanup before deleting the bucket
      autoDeleteObjects: true,
      // Disable public read access
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    const distribution = new cloudfront.Distribution(
      this,
      "MyStoreDistribution",
      {
        defaultBehavior: {
          origin: origins.S3BucketOrigin.withOriginAccessControl(bucket),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        defaultRootObject: "index.html", // This setting will automatically create an OAC and update the Bucket Policy
      },
    );

    // Updating deployment: adding binding to CloudFront for auto-invalidation
    new s3deploy.BucketDeployment(this, "DeployWebsite", {
      sources: [
        s3deploy.Source.asset(path.join(__dirname, "..", "..", "dist")),
      ],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ["/*"], // We clear the cache for all files with each deploy
    });

    // Print the URL of the website to the console after the deployment is complete
    new cdk.CfnOutput(this, "CloudFrontUrl", {
      value: distribution.distributionDomainName,
    });
  }
}
