# Terraform tutorial
source : https://learn.hashicorp.com/collections/terraform/gcp-get-started (for GCP)

## Introduction of Terraform
Terraform is HashiCorp's infrastructure as code tool. It lets you define resources and infrastructure in human-readable, declarative configuration files, and manages your infrastructure's lifecycle.
- Terraform can manage infrastructure on multiple cloud platforms.
- The human-readable configuration language helps you write infrastructure code quickly.
- Terraform's state allows you to track resource changes throughout your deployments.
- You can commit your configurations to version control to safely collaborate on infrastructure.

Terrafor plugins are called __providers__. Providers define individual units of infrastructure, for example compute instances or private networks, as resources. You can compose resources from different providers into reusable Terraform configurations called modules, and manage them with a consistent language and workflow.

Terraform's configuration language is declarative, meaning that it describes the desired end-state for your infrastructure, in contrast to procedural programming languages that require step-by-step instructions to perform tasks. Terraform providers automatically calculate dependencies between resources to create or destroy them in the correct order.

### To deploy infrastructure with Terraform:

- __Scope__ - Identify the infrastructure for your project.
- __Author__ - Write the configuration for your infrastructure.
- __Initialize__ - Install the plugins Terraform needs to manage the infrastructure.
- __Plan__ - Preview the changes Terraform will make to match your configuration.
- __Apply__ - Make the planned changes.

### Collaborate
Terraform allows you to collaborate on your infrastructure with its remote state backends. When you use Terraform Cloud (free for up to five users), you can securely share your state with your teammates, provide a stable environment for Terraform to run in, and prevent race conditions when multiple people make configuration changes at once.

You can also connect Terraform Cloud to version control systems (VCSs) like GitHub, GitLab, and others, allowing it to automatically propose infrastructure changes when you commit configuration changes to VCS. This lets you manage changes to your infrastructure through version control, as you would with application code.

## Installation
Follow the steps on [this page](https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/gcp-get-started).

## Basic command
- `terraform init`  
- `terraform apply`  
- `terraform destory`
- `terraform plan`  Generates a speculative execution plan, showing what actions Terraform would take to apply the current configuration. This command will not actually perform the planned actions.

## TASKS
- [x] set google cloud
    1. create new project and bind the billing account
    2. enable Google Compute Engine
    3. create a GCP service account
- [x] finish the tutorial from terraform
    1. check [the documentation](https://registry.terraform.io/providers/hashicorp/google/latest/docs) for GCP resources.
    2. `terraform fmt` to  updates configurations in the current directory for readability and consistency.
    3. `terraform validate` to make sure your configuration is syntactically valid and internally consistent.
    4. `terraform.tfstate` stores the IDs and properties of the resources it manages in this file, so that it can update or destroy those resources going forward, use `terraform show` to show the state.
- [x] finish the tutorial about terraform variables
    1. `variables.tf` to define variabels (can use default values)
    2. `terraform.tfvars` to populate variables using values from a file
- [x] finish the tutorial about terraform output query
    1. `outputs.tf` defint the output values which will be printed on console and can be queried by `terraform output`.
    2. first apply, then can query output.