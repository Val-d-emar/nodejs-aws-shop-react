# React-shop-cloudfront

## Manual deplomenty Links

S3 Bucket (AccessDenied): [http://myshop-react-val-d-emar-2026.s3.eu-north-1.amazonaws.com](http://myshop-react-val-d-emar-2026.s3.eu-north-1.amazonaws.com)
S3-website (403): [http://myshop-react-val-d-emar-2026.s3-website.eu-north-1.amazonaws.com](http://myshop-react-val-d-emar-2026.s3-website.eu-north-1.amazonaws.com)
CloudFront: [https://d2m92kppsszocv.cloudfront.net](https://d2m92kppsszocv.cloudfront.net)

## AWS CDK deployment Links

S3 Bucket (AccessDenied): [https://cdkstack-mystorebucket3f18987e-qpijutissi1y.s3.eu-north-1.amazonaws.com](https://cdkstack-mystorebucket3f18987e-qpijutissi1y.s3.eu-north-1.amazonaws.com)
CloudFront: [https://d1t0zd53prid5l.cloudfront.net](https://d1t0zd53prid5l.cloudfront.net)

## Manual deployment evaluation criteria (70 points)

- [X] **30** -  `S3 Bucket` was created and configured properly. The `Application` was uploaded to `S3 Bucket` and is available over the Internet.
- [X] **40** -  a `CloudFront` distribution is created and configured properly; the `Application` is now served with `CloudFront` and is available over the Internet via `CloudFront` URL.

> Due to changes in your `S3 Bucket`:
>
> - [X] `CloudFront` URL is provided and opens a static website.
> - [X] `S3 Bucket` URL shows **403 Access Denied error**.

NOTE: _If this one is done, this means you acquire score points for both.(70 points)_

## AWS CDK deployment evaluation criteria (+30 points) _(optional)_

- [X] **30** - `S3 Bucket` was created, `Application` was deployed, `CloudFront` Distribution and Invalidation created and configured by using `AWS CDK`. The `Application` can be built and deployed by running `npm` script commands.

> - [X] `PullRequest` contains:
> - [X] `CloudFront` URL is provided and opens a static website
> - [X] `S3 Bucket` URL shows **403 Access Denied error**
> - [X] description of work has been done
