export default ({markup, css}) => {
    return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Professional Services</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
          <style>
              a{
                text-decoration: none
              }
          </style>
        </head>
        <body style="margin:0">
          <div id="root">${markup}</div>
          <style id="jss-server-side">${css}</style>
          <script id="stripe-js" src="https://js.stripe.com/v3/" async></script>
          <script type="text/javascript" src="/dist/bundle.js"></script>
          <script src="https://npmcdn.com/react@0.14.2/dist/react.min.js"></script>
          <script src="https://npmcdn.com/react-dom@0.14.2/dist/react-dom.min.js"></script>
          <script src="https://npmcdn.com/google-map-react@1.0.1/dist/GoogleMapReact.js"></script>
        </body>
      </html>`
}
