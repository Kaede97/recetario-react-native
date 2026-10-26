import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

// Aqui van las recetas listadas, que posterioremnte serán mandadas a llamra.
const RECETAS = [
  {
    id: '1',
    titulo: 'Tacos al Pastor Caseros',
    tiempo: '30 min',
    porciones: '4 personas',
    imagen: require('../assets/tacospastor.jpg'),
    ingredientes: [
      '500g de carne de cerdo',
      '3 chiles guajillo limpios y hidratados',
      '1/4 de taza de jugo de piña',
      'Tortillas de maíz',
      'Cebolla, cilantro y piña picada al gusto'
    ],
    preparacion: [
      'Licúa los chiles con el jugo de piña para hacer el adobo.',
      'Marina la carne por 20 minutos.',
      'Cocina la carne en un sartén bien caliente.',
      'Pica la carne y sirvela en tortillas con cebolla, cilantro y piña.'
    ]
  },
  {
    id: '2',
    titulo: 'Hot Cakes Esponjosos',
    tiempo: '15 min',
    porciones: '3 personas',
    imagen: require('../assets/hotcakes.jpg'),
    ingredientes: [
      '1 taza de harina para hot cakes',
      '3/4 de taza de leche',
      '1 huevo',
      '1 cucharada de mantequilla derretida',
      'Miel al gusto'
    ],
    preparacion: [
      'Mezcla la harina, la leche, el huevo y la mantequilla derretida en un tazón hasta que no haya grumos.',
      'Calienta un sartén y coloca un poco de mantequilla.',
      'Vierte la mezcla y voltea cuando tenga burbujas.',
      'Espera a que el otro lado tambien se cocine.',
      'Sirve con miel.'
    ]
  }
];

export default function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <Text style={styles.appTitulo}>Recetario de la Nona</Text>
        <Text style={styles.appSubtitulo}>Aprende recetas desde tu celular</Text>
      </View>

      {RECETAS.map((receta) => (
        <View key={receta.id} style={styles.card}>
          <Image source={receta.imagen} style={styles.imagen} />
          
          <View style={styles.cardContenido}>
            <Text style={styles.recetaTitulo}>{receta.titulo}</Text>
            
            <View style={styles.detallesRow}>
               <View style={styles.detalleBadge}>
                 <Ionicons name="time-outline" size={14} color="#495057" style={{ marginRight: 4 }} />
                  <Text style={styles.detalleBadge}>{receta.tiempo}</Text>
               </View>
              
              <View style={styles.detalleBadge}>
                <Ionicons name="people-outline" size={14} color="#495057" style={{ marginRight: 4 }} />
                <Text style={styles.detalleBadge}>{receta.porciones}</Text>
              </View>
            </View>

            <Text style={styles.seccionTitulo}>Ingredientes:</Text>
            {receta.ingredientes.map((ingrediente, index) => (
              <Text key={index} style={styles.ingredienteTexto}>• {ingrediente}</Text>
            ))}

            <Text style={styles.seccionTitulo}>Preparación:</Text>{receta.preparacion.map((paso, index) => (
              <Text key={index} style={styles.preparacionTexto}>- {paso}</Text>
            ))}
          </View>
        </View>
      ))}
      
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7a409', 
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 60,
    marginBottom: 20,
  },
  appTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#090a0a',
  },
  appSubtitulo: {
    fontSize: 14,
    color: '#25292c',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 24,
    overflow: 'hidden', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3, 
  },
  imagen: {
    width: '100%',
    height: 180,
  },
  cardContenido: {
    padding: 16,
  },
  recetaTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 8,
  },
  detallesRow: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 16,
  },
  detalleBadge: {
    backgroundColor: '#E9ECEF',
    color: '#495057',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: '600',
    marginRight: 8,
  },
  seccionTitulo: {
    fontSize: 15,
    fontWeight: '700',
    color: '#495057',
    marginTop: 12,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  ingredienteTexto: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 3,
    lineHeight: 20,
  },
  preparacionTexto: {
    fontSize: 14,
    color: '#6C757D',
    lineHeight: 22,
    textAlign: 'justify',
  },
});
