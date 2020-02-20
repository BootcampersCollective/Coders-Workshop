object ServerRepository {
	var serverMap: Map[String, Set[Int]] = Map (
		"API" -> Set.empty[Int],
		"WEB" -> Set.empty[Int],
		"SEARCH" -> Set.empty[Int]
	)
	var existingServers: List[Server] = List.empty[Server]

}
