---
title: Migrating 30+ AWS Lambda endpoints to a Node.js Backend Without Freezing Development
summary: How I migrated a Lambda-composed backend into a NestJS application while keeping feature work moving and improving the team's day-to-day development speed.
coverImage: /images/case-studies/lambda-migration/thumbnail.png
coverImageAlt: Lambda migration architecture
---

At the time, our backend was fragmented across *30+ Lambda functions*. That worked well enough when the team had two or three engineers, but as we grew to eight, it became a bottleneck.

Local testing was difficult to set up, so staging deployments were practically required just to validate changes. As a result, *we frequently stepped on each other's toes by pushing to staging and overwriting someone else's changes*.

Ideally, we would consolidate the Lambda functions into a single backend application. However, it was not a priority for the CTO at the time. After a few conversations, I convinced him to let me take on the migration myself, with one important constraint: ***feature development could not be frozen***.

I owned the project from planning through execution. The basic idea was to set up a Node.js backend application running on EKS and have the existing API Gateway route traffic to it instead of the Lambda functions.

I built the infrastructure for the new application: an EKS cluster, load balancers, and the security groups needed for traffic between API Gateway, the load balancers, EKS, and the database. I also configured the CircleCI pipeline to build and deploy the application as a Docker image hosted on ECR. The infrastructure was managed with Pulumi.

After setting up the basic NestJS application, I configured the API Gateway so any traffic that did not match an existing Lambda route would be sent to the new service. Then I coordinated with the team so all new endpoints would be built only in the new backend.

Because the legacy Lambda functions and the new service shared the same database, the Prisma schema had to be duplicated in both repositories. It was not ideal, but it was a worthwhile tradeoff because it allowed us to keep shipping while the migration was underway. Fortunately, this situation was short-lived.

Once the foundation was in place, I created Jira tickets for the remaining work. Each ticket covered the migration of a single endpoint. Since most of the work was mechanical, I also wrote a **short checklist** the team could follow:

1. *Copy the code from the Lambda function to the new application, keeping the endpoint path the same.*
2. *Remove the API Gateway route for that path so traffic would be directed to the new application.*
3. *Delete the old Lambda function.*

This made the work easy to parallelize, so the migration could be distributed across the team instead of depending entirely on me.

By the end of the project, the team could develop and test backend changes much faster. The ***day-to-day experience of working on the system also improved noticeably***.

The whole project took two to three months, with just one week of development freeze while the team migrated every endpoint. We ended up deciding it was better to freeze for a week and finish the project sooner. Overall, I think it was a *solid timeline*, especially considering my lack of experience with all the technologies involved at the time.

**When I took on the project, nearly every tool involved was new to me**. I had limited experience with Node.js and Kubernetes, had never set up a cluster from scratch, and had not worked with AWS, Pulumi, or CircleCI before. That made the project especially challenging.

One thing I would have done differently was the choice of EKS.

In hindsight, ECS would have been a better fit. The team did not have Kubernetes expertise, and ECS would have made the application easier to manage. I eventually migrated the service from EKS to ECS and reduced costs in the process, but that is a story for another time.
