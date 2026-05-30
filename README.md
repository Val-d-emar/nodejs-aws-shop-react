# React-shop-cloudfront

## Task 7 (Authorization)

### What was done:

- [x] authorization-service is added to the repo, has correct basicAuthorizer lambda and correct AWS CDK Stack
- [x] Import Service AWS CDK Stack has authorizer configuration for the importProductsFile lambda. Request to the importProductsFile lambda should work only with correct authorization_token being decoded and checked by basicAuthorizer lambda. Response should be in 403 HTTP status if access is denied for this user (invalid authorization_token) and in 401 HTTP status if Authorization header is not provided.
- [x] Client application is updated to send "Authorization: Basic authorization_token" header on import. Client should get authorization_token value from browser localStorage

### Additional scope (Optional tasks):

- [x] +30 - Client application should display alerts for the responses in 401 and 403 HTTP statuses. This behavior should be added to the nodejs-aws-fe-main/src/index.tsx file.

## Links:

- **Frontend App (CloudFront):** [https://dhoyc6sbijzzm.cloudfront.net](https://dhoyc6sbijzzm.cloudfront.net)
- **BE PR:** [https://github.com/Val-d-emar/nodejs-aws-shop-backend/pull/5](https://github.com/Val-d-emar/nodejs-aws-shop-backend/pull/5)
- **Test Credentials for Reviewers:**
  - Login: `Val-d-emar`
  - Password: `TEST_PASSWORD`
  - Token string to put in localStorage: `VmFsLWQtZW1hcjpURVNUX1BBU1NXT1JE`
