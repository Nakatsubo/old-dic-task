require 'cgi'
cgi = CGI.new

cgi.out("type" => "text/html", "charset" => "UTF-8") {
  get = cgi['goya']

  "<html>
    <body>
      <p>結果：</p>
      <p>#{get}</p>
    </body>
  </html>"
}