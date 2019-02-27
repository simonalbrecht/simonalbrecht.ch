# simonalbrecht.ch

This is the source code of [Simon Albrecht's Website](https://simonalbrecht.ch). It is based on the static site generator [Hugo](https://gohugo.io/) and is hosted on [Amazon S3](https://aws.amazon.com/s3/) (behind [CloudFlare](https://www.cloudflare.com/)).

## Getting Started

```bash
brew install hugo
pip3 install Pygments
```

## Running locally

```bash
hugo serve
```

## Building for production
```bash
hugo
```

The generated site will be in the `public` folder.

## Configuration
The configuration for the different environments can be found in `config`. The configuration for running locally is in the `config/development` folder, the production config in `config/_default`.

## License
This code is licensed under BSD-3-Clause. See [LICENSE](LICENSE) for more information.