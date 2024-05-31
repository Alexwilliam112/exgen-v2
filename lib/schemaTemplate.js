module.exports = {
    dependencies: {
        ejs: false,
        express: true,
        pg: true,
        sequelize: true,
        bcryptjs: true,
        jsonwebtoken: true,
        dotenv: true,
        axios: false,
        imagekit: false,
        multer: false,
    },

    devDependencies: {
        nodemon: true,
        "sequelize-cli": true,
        jest: true,
        supertest: true,
        "jest-tap-reporter": true,
    },

    buildSetup: {
        routers: [
            
        ],
        controllers: [

        ]
    },

    models: [
        {
            model_name: '',
            attributes: {
                key1: 'string',
                key2: 'string',
                key3: 'string',
                key4: 'string',
                key5: 'string',
                key6: 'string',
            }
        },
        {
            model_name: '',
            attributes: {
                key1: 'string',
                key2: 'string',
                key3: 'string',
                key4: 'string',
                key5: 'string',
                key6: 'string',
            }
        },
        {
            model_name: '',
            attributes: {
                key1: 'string',
                key2: 'string',
                key3: 'string',
                key4: 'string',
                key5: 'string',
                key6: 'string',
            }
        }
    ]
}