const writeFile = require('fs').writeFile
const targetPath = './src/environments/environment.prod.ts'
const envConfigFile = `export const environment = {
    production: true,
    loginApi: 'https://atwd2-ws269879.remote.ac/api'
}
`
writeFile(targetPath, envConfigFile, err => {
    if (err) {
        throw console.error(err)
    } else {
        console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`)
    }
})
