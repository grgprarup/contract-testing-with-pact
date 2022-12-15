# Contract Based Testing with Pact Go

This is an example of how to use Pact to test HTTP APIs in Go. It uses the [Pact Go library](https://github.com/pact-foundation/pact-go) to generate, verify and publish Pact files.

## Prerequisites

You will need to have the following installed:

* Go
* NodeJS
* NPM

## Project structure

The project is split into two parts:

* Consumer
* Provider

## Consumer

The consumer is a simple HTTP client that makes a request to the provider. The consumer has a test that uses Pact to verify that the provider will respond with the correct data.

## Provider

The provider is a simple HTTP server that responds to a request with some data. The provider has a test that uses Pact to verify that the consumer will send the correct data.

## Running the tests

To run the tests, you will need to have Go installed. You can then run the following commands:

```bash
$ go test -v ./consumer
$ go test -v ./provider
```

## Generating the Pact files

To generate the Pact files, you will need to have NodeJS installed. You can then run the following commands:

```bash
$ npm install
$ npm run pact
```

## Verifying the Pact files

To verify the Pact files, you will need to have NodeJS installed. You can then run the following commands:

```bash
$ npm install
$ npm run verify
```

## Publishing the Pact files

To publish the Pact files, you will need to have NodeJS installed. You can then run the following commands:

```bash
$ npm install
$ npm run publish
```

## Viewing the Pact files

To view the Pact files, you will need to have NodeJS installed. You can then run the following commands:

```bash
$ npm install
$ npm run view
```

## Contributing

1. Fork it

2. Create your feature branch

3. Commit your changes

4. Push to the branch 

5. Create a new Pull Request
