<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            :clipped="$vuetify.breakpoint.lgAndUp"
            fixed
            app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
                  v-if="item.heading"
                  :key="item.heading"
                  row
                  align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
                  v-else-if="item.children"
                  :key="item.text"
                  v-model="item.model"
                  :prepend-icon="item.model ? item.icon : item['icon-alt']"
                  append-icon=""
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                    <a :href="item.to"></a>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-list-tile
                    v-for="(child, i) in item.children"
                    :key="i"
                    @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            color="#2ecf95"
            dark
            app
            fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Augura</span>
      </v-toolbar-title>
      <v-text-field
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="search"
              label="Search"
              class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon to="http://192.168.1.233/augura/" target="_blank">
        <a href="http://192.168.1.233/augura/"><v-icon color="white">location_on</v-icon></a>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="64px" tile>
          <img
                  src="auguralogo.png"
                  alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>

    <v-container
            fluid
            grid-list-md
    >  <v-layout row wrap>

    <v-card>
      <v-img
              class="white--text"
              height="200px"
              src="alfalfa.jpg"
      >
      </v-img>
      <v-card-title>
        <div>
          <span class="grey--text">Alfalfa - 10 Toneladas</span><br>
          <span>Moises Sandoval - Ejido Nuevo León - $$$</span><br>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange">Ver</v-btn>
        <v-btn flat color="orange">Comprar</v-btn>
      </v-card-actions>
      <v-progress-linear v-model="valueDeterminate" color="warning"></v-progress-linear>
    </v-card>

    <v-card>
      <v-img
              class="white--text"
              height="200px"
              src="trigo.jpg"
      >
      </v-img>
      <v-card-title>
        <div>
          <span class="grey--text">Trigo - 10 Toneladas</span><br>
          <span>Moises Sandoval - Ejido Nuevo León - $$$</span><br>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange">Ver</v-btn>
        <v-btn flat color="orange">Comprar</v-btn>
      </v-card-actions>
      <v-progress-linear v-model="valueTerminando" color="error"></v-progress-linear>
    </v-card>

    <v-card>
      <v-img
              class="white--text"
              height="200px"
              src="cebollin.jpg"
      >
      </v-img>
      <v-card-title>
        <div>
          <span class="grey--text">Cebollin - 10 Toneladas</span><br>
          <span>Moises Sandoval - Ejido Nuevo León - $$$</span><br>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange">Ver</v-btn>
        <v-btn flat color="orange">Comprar</v-btn>
      </v-card-actions>
      <v-progress-linear v-model="valueNuevo"
                         color="success"
      ></v-progress-linear>
    </v-card>

    <v-card>
      <v-img
              class="white--text"
              height="200px"
              src="cebollin.jpg"
      >
      </v-img>
      <v-card-title>
        <div>
          <span class="grey--text">Cebollin - 20 Toneladas</span><br>
          <span>Jorge Aguirre - Ejido Nuevo León - $$$</span><br>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange">Ver</v-btn>
        <v-btn flat color="orange">Comprar</v-btn>
      </v-card-actions>
      <v-progress-linear v-model="valueTerminando"
                         color="error"
      ></v-progress-linear>
    </v-card>

    <br/>


      <v-card>
        <v-img
                class="white--text"
                height="200px"
                src="tomate.jpg"
        >
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Tomate - 120 Cajas</span><br>
            <span>Moises Sandoval - Ejido Nuevo León - $$$</span><br>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Ver</v-btn>
          <v-btn flat color="orange">Comprar</v-btn>
        </v-card-actions>
        <v-progress-linear v-model="valueDeterminate" color="warning"></v-progress-linear>
      </v-card>

      <v-card>
        <v-img
                class="white--text"
                height="200px"
                src="maiz.jpg"
        >
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Maíz - 10 Toneladas</span><br>
            <span>Moises Sandoval - Ejido Nuevo León - $$$</span><br>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Ver</v-btn>
          <v-btn flat color="orange">Comprar</v-btn>
        </v-card-actions>
        <v-progress-linear v-model="valueTerminando" color="error"></v-progress-linear>
      </v-card>

      <v-card>
        <v-img
                class="white--text"
                height="200px"
                src="algodon.jpg"
        >
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Algodón - 10 Toneladas</span><br>
            <span>Moises Sandoval - Ejido Nuevo León - $$$</span><br>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Ver</v-btn>
          <v-btn flat color="orange">Comprar</v-btn>
        </v-card-actions>
        <v-progress-linear v-model="valueNuevo"
                           color="success"
        ></v-progress-linear>
      </v-card>

      <v-card>
        <v-img
                class="white--text"
                height="200px"
                src="algodon.jpg"
        >
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Algodón - 20 Toneladas</span><br>
            <span>Jorge Aguirre - Ejido Nuevo León - $$$</span><br>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Ver</v-btn>
          <v-btn flat color="orange">Comprar</v-btn>
        </v-card-actions>
        <v-progress-linear v-model="valueDeterminate"
                           color="warning"
        ></v-progress-linear>
      </v-card>
    </v-layout>
    </v-container>

    <v-btn
            fab
            bottom
            right
            color="pink"
            dark
            fixed
            @click="dialog = !dialog"
    >



      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
                class="grey lighten-4 py-4 title"
        >
          Solicitud de Producto
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
            </v-flex>
            <v-flex xs6>
              <v-select
                      :items=demandas
                      item-text="nombre"
                      v-model="demanda"
                      :menu-props="{ maxHeight: '200' }"
                      label="Producto"
                      return-object
                      persistent-hint
              ></v-select>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                      placeholder="Cantidad"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-calendar
                      ref="calendar"
                      v-model="start"
                      :type="type"
                      :end="end"
                      color="primary"
              ></v-calendar>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancelar</v-btn>
          <v-btn flat @click="dialog = false">Enviar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      demanda: null,
      valueNuevo: 20,
      valueDeterminate: 50,
      valueTerminando: 90,
      demandas: ['Maíz','Trigo',"Cebollin","Tomate","Nopal"],
      items: [
        { icon: 'assignment_ind', text: 'Mi cuenta' },
        { icon: 'history', text: 'Mis ordenes' },
        { icon: 'payment', text: 'Mis pagos' },
        { icon: 'settings', text: 'Mis direcciones' },
        { icon: 'payment', text: 'Metodo de pago' },
        { icon: 'favorite', text: 'Favoritos' },
        { icon: 'close', text: 'Cerrar sesión' },
        { icon: 'help', text: 'Ayuda' }
      ],
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
      ]
    }),
    props: {
      source: String
    },
    mounted(){
      axios.get("http://192.168.10.10/api/v1/cultivos").then(response =>
      {
        this.demandas = response.data
        //console.log(this.demandas);
      });
    },
    mapa(){
      window.open('http://example.com');
    },

  }
</script>