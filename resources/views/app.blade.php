<!DOCTYPE html>
   <html>
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1">
       @viteReactRefresh
       <link rel='stylesheet' href='{{asset("css/nprogress.min.css")}}'/>
       <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">
       @vite(['resources/css/app.css','resources/js/app.jsx'])
       @inertiaHead
     </head>
     <body>
       @inertia
     </body>
   </html>