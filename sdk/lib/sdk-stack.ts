import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Bucket, BlockPublicAccess, HttpMethods } from "aws-cdk-lib/aws-s3";

export class SdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a new S3 Bucket with public read access
    const s3Bucket = new Bucket(this, "YOUR_RESOURCE_ID", {
      bucketName: "YOUR_BUCKET_NAME",
      publicReadAccess: true,
      blockPublicAccess: BlockPublicAccess.BLOCK_ACLS,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      versioned: true,
      cors: [
        {
          allowedHeaders: ["*"],
          allowedMethods: [HttpMethods.GET, HttpMethods.PUT],
          allowedOrigins: ["*"],
          exposedHeaders: [],
          maxAge: 3000,
        },
      ],
    });
  }
}
