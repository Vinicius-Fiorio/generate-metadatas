const { ArtEngine, inputs, generators, renderers, exporters } = require("@hashlips-lab/art-engine");

const BASE_PATH = __dirname;

const artGenerator = new ArtEngine({
    cachePath: `${BASE_PATH}/cache`,

    outputPath: `${BASE_PATH}/output`,

    inputs: {
      nome: new inputs.ImageLayersInput({
        assetsBasePath: `${BASE_PATH}/traitsFluff`
      })
    },

    generators: [
      new generators.ImageLayersAttributesGenerator({
        dataSet: "nome",
        startIndex: 0,
        endIndex: 10
      })
    ],

    renderers: [
      new renderers.ItemAttributesRenderer({
        name: (id) => `Fluff #${id}`,
        description: () => "fluff description"
      }),
      new renderers.ImageLayersRenderer({
        height: 1200,
        width: 1200
      })
    ],

    exporters: [
      new exporters.ImagesExporter(),
      new exporters.Erc721MetadataExporter({
        imageUriPrefix: "ipfs://BASE_PATH/",
      })
    ]
})

artGenerator.run()