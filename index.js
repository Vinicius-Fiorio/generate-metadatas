const { ArtEngine, inputs, generators, renderers, exporters } = require("@hashlips-lab/art-engine");

const BASE_PATH = __dirname;

const artGenerator = new ArtEngine({
    cachePath: `${BASE_PATH}/cache`,

    outputPath: `${BASE_PATH}/output`,

    inputs: {
        yuji: new inputs.ImageLayersInput({
            assetsBasePath: `${BASE_PATH}/traits`
        })
    },

    generators: [
        new generators.ImageLayersAttributesGenerator({
            dataSet: "yuji",
            startIndex: 1,
            endIndex: 10
        })
    ],

    renderers: [
        new renderers.ItemAttributesRenderer({
            name: (id) => `Yuji #${id}`,
            description: () => "This is a insane Yuji Samurai collection!"
        }),
        new renderers.ImageLayersRenderer({
            height: 600,
            width: 600
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