Created a CI/CD pipeline using GCP build. 
When a new request is merged on development or master a trigger will be called to build GCP build pipeline. 
Added cloudbuild.yaml file. Whenever new code is pushed, continous integration will follow the steps in cloudbuild to build the project.