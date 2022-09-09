import { ApolloProvider } from "@apollo/client"
import { Routes } from "./routes"
import { apolloClient } from "./services/apollo"

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Routes />
    </ApolloProvider>
  )
}

export default App
