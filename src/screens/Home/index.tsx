import { ActivityIndicator, FlatList, Text, TextInput, View } from "react-native"
import { styles } from "./styles"
import { MagnifyingGlass } from "phosphor-react-native"
import { useEffect, useState } from "react"
import { api } from "../../services/api";
import { CardMovies } from "../../components/CardMovies";
import { useNavigation } from "@react-navigation/native";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}


export function Home() {
    
  const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([])
  const [resultMovies, setResultMovies] = useState<Movie[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [noResult, setNoResult] = useState(false)
  const [search, setSearch] = useState("")
  
  useEffect(()=> {
    loadMoreData();
  },[])

  const loadMoreData = async () => {
    setLoading(true);
    const response = await api.get("/movie/popular", {
      params:{
        page,
      },
    });
    setDiscoveryMovies([...discoveryMovies, ...response.data.results]);
    setPage(page + 1);
    setLoading(false);
  }

  const searchMovies = async (query: string) => {
    setLoading(true);
    const response = await api.get("/search/movie", {
      params:{
        query,
      },
    });

    if(response.data.results.length == 0){
      setNoResult(true);
      setLoading(false);
      setResultMovies([]);
    }else{
      setNoResult(false);
      setResultMovies(response.data.results);
      setLoading(true)
    }
    
  }

  const handleSearch = (text: string) => {
    setSearch(text)
    if(text.length > 2){
      searchMovies(text)
    } else{
      setResultMovies([]);
    }
  }

  //criar função de RenderMovieItem

  const navigation = useNavigation()

  const renderMovieItem = ({item} : {item:Movie}) => (
    
    <CardMovies data={item} onPress={() => navigation.navigate("Details", {movieId: item.id})}/>

  )

  const movieData = search.length > 2 ? resultMovies : discoveryMovies


  return (
        <View style = {styles.container}>
    
    <View style = {styles.header}>
      <Text style = {styles.headerText}>O que você esta procurando ?</Text>
      <View style = {styles.containerInput}>
        <TextInput placeholder='Buscar' style = {styles.input}
        value={search}
        onChangeText={handleSearch}
        />
        <MagnifyingGlass color="#000" size={25} weight='light'/>
      </View>

      {noResult && (
        <Text style={{color:"#fff", textAlign: 'center', fontSize:18, marginVertical: 10 }}>Nenhum filme encontrado para "{search}"</Text>
      )}

    </View> 
      <View>
        <FlatList 
          data={movieData}
          numColumns={3}
          renderItem={renderMovieItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 35,
            paddingBottom: 100
          }}
          onEndReached={() => loadMoreData()}
          onEndReachedThreshold={0.5}
        />
        {loading && <ActivityIndicator size={50} color={"#E82F3E"}/>}
      </View>
    </View>
    )
}