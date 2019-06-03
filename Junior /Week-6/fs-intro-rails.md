FS-Intro-to-Rails

1. What is special about Rails?

    - very fast prototyping
    - renders on server side
    - very good for generating an API really quickly
        - that API can have permissions!

2. What's an MVC framework?

    - Model - View - Controller

3. Model

    - Active Model Query Interface
    - This is like Sequelize
    - Uses Active Record ORM
    - Turns the resource into a special ruby object called a <# Ruby Active Record Object>
    - Models are always singular; otherwise, Ruby will throw an error
    - ```
      class Student < ApplicationRecord
          #Where I put relationships
          #eg belongs_to :ckass
      end
      ```

4. Controller

    - Router
    - There will be some routing system
    - Each controller is a sub-router for that resource

5. View
    - What renders on the front-end
    - ERB - Embedded Ruby (like JSX) (eg. index.html.erb)
    - {JS CODE HERE} is replaced by <% @students.each do |student| %>
    - to render it, do <%= student.name %>

Code

1. Install rails!

2. Use rail from command line!

    - `rails new MyApp -d postgresql` [-d is data?]
        - this creates a whole template for you! So need!
    - hey guess what, there's also a react new app generator! **LOOK UP REACT NEW APP GENERATOR**

3. What does our new Rails app look like?

    - you will have to open a new folder?
    - You will mostly be working in the 'app' folder
        - esp the model, controller, and view subdirectories
    - Config is where you'd put external API keys
    - Routes.rb is the 'routing system' that points to the correct controller
        - will have a
        ```
        Rails.application.routes.draw do
            resources : students
        end
        ```
    - db foldrawer will have a seeds.rb file
    - Gemfile is the package.json equivalent - shows all packages

4. Scaffold

    - the scaffold CLI command will create your MVCs for you out of box
        - `rails generate scaffold resource propety:string age: integer`
    - scaffolds all the common CRUD applications (CREATE, READ, UPDATE, DESTROY)

5. How to Runserver? - `rails s` or `rails server`

6. How to create a db

    - `rails db:create`
    - set up a migration
      `rails db:migrate`

7. What is a migration?
    - A migration is any change in your DB
    - Version control for your db - can roll back migrations
    - Once you set up your migration, you still have to run the migration with `rails db:migrate`
    - The migration will create a schema for us
    - Still need to associate a model w/ the db table
