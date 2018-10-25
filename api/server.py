from http.server import BaseHTTPRequestHandler, HTTPServer
 
class RequestHandler(BaseHTTPRequestHandler):
  def do_GET(self):
    response = self.handle_http(200)
    self.wfile.write(response)

  def handle_http(self, status_code):
    self.send_response(status_code)

    self.send_header('Content-type','application/json')
    self.end_headers()

    data = open('./dashboard_data.json', 'r')

    return data.read().encode()
 
def run():
  print('Starting server...')
 
  server_address = ('127.0.0.1', 8081)
  httpd = HTTPServer(server_address, RequestHandler)
  
  print('Running server on localhost:8081')
  httpd.serve_forever()
 
run()
