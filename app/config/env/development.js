module.exports = {

  db: {
    // connectionString: process.env.SITE_MONGO_URI || "mongodb://hans:hans@ds161471.mlab.com:61471/mean-d3"
    connectionString: process.env.SITE_MONGO_URI || "mongodb://127.0.0.1:27017/carousel"
  },

  log: {
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    formd: 'dev',
    options: {}
  },
  DiffBotAPI: {
    token: 'ed875e35581d8b7b61812a64936a5665'
  }
};
