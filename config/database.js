module.exports = ({ env }) => {
    return {
        defaultConnection: 'default',
        connections: {
            default: {
                connector: 'mongoose',
                settings: {
                    host: env('DATABASE_HOST', 'strapi-prod.mongo.cosmos.azure.com'),
                    srv: env.bool('DATABASE_SRV', false),
                    port: env.int('DATABASE_PORT', 10255),
                    database: env('DATABASE_NAME', 'strapi-prod'),
                    username: env('DATABASE_USERNAME', 'strapi-prod'),
                    password: env('DATABASE_PASSWORD', '')
                },
                options: {
                    authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
                    ssl: env.bool('DATABASE_SSL', true)
                }
            }
        }
    };
};
