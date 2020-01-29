
class ServerManager {

	def getServers: List[Server] = {
		ServerRepository.existingServers
	}

	def createServer(serverType: String): Server = {
		val foundServer: Option[Set[Int]] = ServerRepository.serverMap.get(serverType)
		foundServer match {
			case None =>
				val newServer = s"$serverType-1"
				ServerRepository.existingServers = ServerRepository.existingServers ++ List(Server(newServer))
				ServerRepository.serverMap = ServerRepository.serverMap ++  Map(serverType -> Set(1))
				Server(newServer)
			case Some(item) =>
				val nextServerNumber = getNextServerNumber(item)
				val newServer = s"$serverType-$nextServerNumber"
				val newSet = item  ++ Set(nextServerNumber)
				ServerRepository.serverMap = ServerRepository.serverMap ++ Map(serverType -> newSet)
				ServerRepository.existingServers = ServerRepository.existingServers ++ List(Server(newServer))
				Server(newServer)
		}
	}

	private def getNextServerNumber(serverNumberList: Set[Int]): Int = {
		if (serverNumberList.isEmpty) {
			1
		} else {
			val numbers = List.range(1, serverNumberList.last);
			val possibleNumbers = numbers.filter(n => !serverNumberList.contains(n))
			if (possibleNumbers.isEmpty) serverNumberList.last+1
			else possibleNumbers.head;
		}
	}

	def deleteServer(server: Server): Option[Server] = {
		ServerRepository.existingServers.find(s => s == server) match {
			case None => None
			case Some(_) =>
				ServerRepository.existingServers = ServerRepository.existingServers.filter( s => s != server)
				removeFromMap(server)
		}
	}

	private def removeFromMap (server: Server): Option[Server] = {
		val serverName = server.name.split("-")(0)
		val serverNumber = server.name.split("-")(1).toInt
		val foundServer: Option[Set[Int]] = ServerRepository.serverMap.get(serverName)
		foundServer match {
			case None => None
			case Some(serverNumbers) =>
				if (serverNumbers.contains(serverNumber)){
					val filteredServerNumbers = serverNumbers.toList.filter( s =>  s != serverNumber)
					ServerRepository.serverMap = ServerRepository.serverMap ++ Map(serverName -> filteredServerNumbers.toSet)
					Some(server)
				} else {
					None
				}
		}
	}

}
