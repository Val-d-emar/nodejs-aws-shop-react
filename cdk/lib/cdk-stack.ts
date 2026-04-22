import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as path from "path";

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Creating an S3 bucket for hosting
    const bucket = new s3.Bucket(this, "MyStoreBucket", {
      // Setting up the bucket as a website
      websiteIndexDocument: "index.html",
      // Setting up automatic bucket deletion when deleting the stack
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      // Automatic file cleanup before deleting the bucket
      autoDeleteObjects: true,
      // Enable public read access
      publicReadAccess: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS_ONLY,
    });

    // Setting up automatic file uploads from the folder dist
    new s3deploy.BucketDeployment(this, "DeployWebsite", {
      sources: [
        s3deploy.Source.asset(path.join(__dirname, "..", "..", "dist")),
      ],
      destinationBucket: bucket,
    });

    // Print the URL of the website to the console after the deployment is complete
    new cdk.CfnOutput(this, "BucketWebsiteUrl", {
      value: bucket.bucketWebsiteUrl,
    });
  }
}
