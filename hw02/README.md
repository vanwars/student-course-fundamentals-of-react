# Notes

## To Run Locally
```shell
npm install  # just once
npm audit fix --force # just once
npm start
```

## To Deploy
```shell
npm run build
npm install -g serve
serve -s build
```

## To Deploy on GitHub Pages w/Relative Paths
Same as above, but first, modify your package.json file by adding the following key-value pair:

```
"homepage": "."
```
