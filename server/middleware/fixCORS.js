

const fixCORS =((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
})

module.exports = fixCORS;