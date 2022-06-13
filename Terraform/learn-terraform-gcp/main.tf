terraform {
  required_providers { // must be top level block
    google = {         // local name
      source  = "hashicorp/google"
      version = "4.24.0"
    }
  }
}

provider "google" {
  credentials = file("ss2022-awt-f6a0264b06b5.json")

  project = "ss2022-awt"
  region  = "us-central1"
  zone    = "us-central1-c"
}

resource "google_compute_network" "vpc_network" { // the resource type, the resource name
  name = "terraform-network"
}
