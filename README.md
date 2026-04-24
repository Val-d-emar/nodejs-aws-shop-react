# React-shop-cloudfront

## Manual deployment Links

S3 Bucket (AccessDenied): [http://myshop-react-val-d-emar-2026.s3.eu-north-1.amazonaws.com](http://myshop-react-val-d-emar-2026.s3.eu-north-1.amazonaws.com)
S3-website (403): [http://myshop-react-val-d-emar-2026.s3-website.eu-north-1.amazonaws.com](http://myshop-react-val-d-emar-2026.s3-website.eu-north-1.amazonaws.com)
CloudFront: [https://d2m92kppsszocv.cloudfront.net](https://d2m92kppsszocv.cloudfront.net)

## AWS CDK deployment Links

S3 Bucket (AccessDenied): [https://cdkstack-mystorebucket3f18987e-t5r5j0yx2gul.s3.eu-north-1.amazonaws.com](https://cdkstack-mystorebucket3f18987e-t5r5j0yx2gul.s3.eu-north-1.amazonaws.com)
CloudFront: [https://dhoyc6sbijzzm.cloudfront.net](https://dhoyc6sbijzzm.cloudfront.net)

## Manual deployment evaluation criteria (70 points)

- [X] **30** -  `S3 Bucket` was created and configured properly. The `Application` was uploaded to `S3 Bucket` and is not available over the Internet S3-website.
- [X] **40** -  a `CloudFront` distribution is created and configured properly; the `Application` is now served with `CloudFront` and is available over the Internet via `CloudFront` URL.

> Due to changes in your `S3 Bucket`:
>
> - [X] `CloudFront` URL is provided and opens a static website.
> - [X] `S3 Bucket` URL shows **403 Access Denied error**.

## AWS CDK deployment evaluation criteria (+30 points) _(optional)_

- [X] **30** - `S3 Bucket` was created, `Application` was deployed, `CloudFront` Distribution and Invalidation created and configured by using `AWS CDK`. The `Application` can be built and deployed by running `npm` script commands.

> - [X] `PullRequest` contains:
> - [X] `CloudFront` URL is provided and opens a static website
> - [X] `S3 Bucket` URL shows **403 Access Denied error**
> - [X] description of work has been done

## What was done:

### Part 1: Manual Deployment

- [X] Created an S3 bucket and configured static hosting.
- [X] Built and uploaded the application manually.
- [X] Created a CloudFront distribution and configured HTTPS and OAC access.
- [X] Checked cache invalidation when updating content.

### Part 2: Automation via AWS CDK (Automated Deployment)

- [X] Created a CDK project in TypeScript.
- [X] Wrote code to create an S3 bucket (with automatic deletion of objects).
- [X] Wrote code to create a CloudFront distribution linked to the bucket via OAC.
- [X] Added BucketDeployment for automatic file uploads and cache invalidation.
- [X] Added the `deploy` npm script to the root `package.json`.
