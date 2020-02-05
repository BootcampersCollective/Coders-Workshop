import play.api.libs.json.Json

case class Server(name: String)

object Server {
	implicit val  format = Json.format[Server]
}