# web-carolapp

Carol App Web Boilerplate contains all the boilerplate you need to create a Carol App.

### Steps to start building a Carol App

1. Install [Node.js](https://nodejs.org/en/download/)
2. Clone this repo `git clone https://github.com/totvslabs/carolapp-std-tface`
3. Install the project dependencies: `make install`
4. Run the command `make datamodels` to generate the classes for the data models available in your tenant (Needs a Carol user and password)
5. Start coding

### How to GET data from Carol

The easiest way to get data from Carol is generating the Data Models and using the built-in Carol service, it should support the most common types of Queries.

Inject the Carol service:

```javascript
  import { Carol } from 'src/app/services/carol.service';

  constructor(
    private carol: Carol
  ) {}
```

Build a query using the Data Models generated:

```javascript
  this.carol.query<Customer>()
      .from(Customer)
      .and(Customer.mdmGoldenFieldAndValues.mdmname).equals('John')
      .pageSize(1)
      .execute()
      .subscribe(response => {
        ...
      });
```

To save a Golden record you can also use the Carol service:

```javascript
  const customer = new Customer();
  customer.mdmGoldenFieldAndValues.mdmname = 'John';

  this.carol.postGolden(Customer, customer.mdmGoldenFieldAndValues)
      .subscribe(response => {
        ...
      });
```

To update a golden record:

```javascript
  const customer: Customer;
  customer.mdmGoldenFieldAndValues.mdmname = 'John';

  this.carol.updateGolden(Customer, customer.mdmId, customer.mdmGoldenFieldAndValues)
      .subscribe(response => {
        ...
      });
```

To delete a golden record:

```javascript
  const customer: Customer;

  this.carol.deleteGolden(Customer, customer.mdmId).subscribe(response => ...);
```

To run a Named Query:

```javascript
  this.carol.query()
    .named('myNamedQuery')
    .params({
      name: 'John'
    })
    .execute()
    .subscribe(response => {
      ...
    });
```

## Development server

Run `make run` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Build

Run `make build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests and e2e

Run `make test` to execute the unit tests via [Karma](https://karma-runner.github.io) and  [Protractor](http://www.protractortest.org/).

## Further help

For further help feel free to open an issue.

## About Carol

[Carol](https://docs.carol.ai) is a data platform with Machine Learning developed and maintained by [Totvs Labs](https://www.totvslabs.com/).
