
import javax.inject.Inject
import play.api.libs.json.{JsValue, Json}
import play.api.mvc.{AbstractController, Action, AnyContent, ControllerComponents}


class ServerController  @Inject()(serverManager: ServerManager, cc: ControllerComponents)
	extends AbstractController(cc) {

	def get: Action[AnyContent] = Action {
		implicit request =>
			val servers = serverManager.getServers
			servers match  {
				case Nil => NoContent
				case _ =>  Ok(Json.toJson(servers))
			}
	}

	def create: Action[JsValue] =  Action (parse.json) {
		implicit request =>
			val payload = request.body.as[String]
			val newServer = serverManager.createServer(payload)
			Ok(Json.toJson(newServer))
	}

	def delete(name: String): Action[AnyContent] = Action {
		implicit request => {
			serverManager.deleteServer(Server(name)) match {
				case None => NotFound(Json.toJson(Server(name)))
				case Some(server) => Ok(Json.toJson(server))
			}
		}
	}

}
