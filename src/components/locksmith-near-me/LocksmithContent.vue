<template>
  <div class="locksmiths">
    <div class="container">
      <div class="row pt-5 pb-5">
        <div class="col-12 pb-5">
          <h1>The main reason to choose us</h1>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card shadow">
            <div class="card-body">
              <ul class="d-flex flex-column align-items-center">
                <li>Emergency Locksmith 24/7 in your location</li>
                <li>Labour from 49£ and locks from 25£</li>
                <li>Money back guaranteed if we couldn’t fix</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card shadow">
            <div class="card-body">
              <ul class="d-flex flex-column align-items-center">
                <li>After burglary Repair</li>
                <li>24/7 for Residential or Comercial</li>
                <li>Full range of items to provide access for required services</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 pt-4">
          <button class="btn btn-primary align-self-center w-25 my-primary-btn mt-4">
            <a class="text-white text-decoration-none" href="tel:03333446467"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
          </button>
        </div>
      </div>
      <div class="row pt-4 pb-5">
        <div class="col-12">
          <img src="../../assets/logo.png" alt="main-logo" class="pb-5" />
          <h5 class="pb-4">We cover multiple areas in United Kingdom with professional locksmiths right near you: </h5>
          <div class="row">
            <div class="col-12 col-md-3">
              <h2>B</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Brighton' } }"><p>Locksmith in Brighton</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Bristol' } }"><p>Locksmith in Bristol</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Birmingham' } }"><p>Locksmith in Birgmingham</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Bolton' } }"><p>Locksmith in Bolton</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Bradford' } }"><p>Locksmith in Bradford</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Bromley' } }"><p>Locksmith in Bromley</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>C</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Crewe' } }"><p>Locksmith in Crewe</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Colchester' } }"><p>Locksmith in Colchester</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Chester' } }"><p>Locksmith in Chester</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Chelmsford' } }"><p>Locksmith in Chelmsford</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Cambridge' } }"><p>Locksmith in Cambridge</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Coventry' } }"><p>Locksmith in Coventry</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Croydon' } }"><p>Locksmith in Croydon</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>D</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Durham' } }"><p>Locksmith in Durham</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Derby' } }"><p>Locksmith in Derby</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Doncaster' } }"><p>Locksmith in Doncaster</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Darlington' } }"><p>Locksmith in Darlington</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Dudley' } }"><p>Locksmith in Dudley</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Dartford' } }"><p>Locksmith in Dartford</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>E</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Enfield' } }"><p>Locksmith in Enfield</p></router-link>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3">
              <h2>G</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Guildford' } }"><p>Locksmith in Guildford</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Glouchester' } }"><p>Locksmith in Glouchester</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>H</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Harrow' } }"><p>Locksmith in Harrow</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Hemel-Hempstead' } }"><p>Locksmith in Hemel Hempstead</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Huddersfield' } }"><p>Locksmith in Huddersfield</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>I</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Ipswich' } }"><p>Locksmith in Ipswich</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Ilford' } }"><p>Locksmith in Ilford</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>K</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Kingston-upon-Thames' } }"><p>Locksmith in Kingston upon Thames</p></router-link>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3">
              <h2>L</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Leeds' } }"><p>Locksmith in Leeds</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Liverpool' } }"><p>Locksmith in Liverpool</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Luton' } }"><p>Locksmith in Luton</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Leicester' } }"><p>Locksmith in Leicester</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>M</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Middlesbrough' } }"><p>Locksmith in Middlesbrough</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Milton-Keynes' } }"><p>Locksmith in Milton Keynes</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Manchester' } }"><p>Locksmith in Manchester</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>N</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Nottingham' } }"><p>Locksmith in Nottingham</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Northampton' } }"><p>Locksmith in Northampton</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Newcastle' } }"><p>Locksmith in Newcastle</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Norwich' } }"><p>Locksmith in Norwich</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>O</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Oxford' } }"><p>Locksmith in Oxford</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Oldham' } }"><p>Locksmith in Oldham</p></router-link>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3">
              <h2>P</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Peterborough' } }"><p>Locksmith in Peterborough</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>R</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Reading' } }"><p>Locksmith in Reading</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Redhill' } }"><p>Locksmith in Redhill</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Romford' } }"><p>Locksmith in Romford</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>S</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Stoke-on-Trent' } }"><p>Locksmith in Stoke on Trent</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Sheffield' } }"><p>Locksmith in Sheffield</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Stevenage' } }"><p>Locksmith in Stevenage</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Swindon' } }"><p>Locksmith in Swindon</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Sunderland' } }"><p>Locksmith in Sunderland</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Slough' } }"><p>Locksmith in Slough</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Stockport' } }"><p>Locksmith in Stockport</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'St-Albans' } }"><p>Locksmith in St Albans</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>T</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Twickenham' } }"><p>Locksmith in Twickenham</p></router-link>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3">
              <h2>U</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Uxbridge' } }"><p>Locksmith in Uxbridge</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>W</h2>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Wigan' } }"><p>Locksmith in Wigan</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Warrington' } }"><p>Locksmith in Warrington</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Wolverhampton' } }"><p>Locksmith in Wolverhampton</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Wakefield' } }"><p>Locksmith in Wakefield</p></router-link>
              <router-link :to="{ name: 'CitiesPage', params: { city: 'Watford' } }"><p>Locksmith in Watford</p></router-link>
            </div>
            <div class="col-12 col-md-3">

            </div>
            <div class="col-12 col-md-3">

            </div>
          </div>
          <!--          <ul class="cities">-->
          <!--              <router-link v-for="(city, id) in cities" :key="id" :to="'/locksmith-' + city.name.toLowerCase()" tag="li">Professional locksmith in {{ city.name }}</router-link>-->
          <!--          </ul>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocksmithContent",
  data() {
    return {
      cities: [
        { id: 1, name: "Bristol" },
        { id: 2, name: "Sheffield" },
        { id: 3, name: "Chester" },
        { id: 4, name: "Milton Keynes" },
        { id: 5, name: "Oxford" },
        { id: 6, name: "Middlesbrough" },
        { id: 7, name: "Stevenage" },
        { id: 8, name: "Reading" },
        { id: 9, name: "Leeds" },
        { id: 10, name: "Guildford" },
        { id: 11, name: "Newcastle" },
        { id: 12, name: "Colchester" },
        { id: 13, name: "Ipswich" },
        { id: 14, name: "Wigan" },
        { id: 15, name: "Birmingham" },
        { id: 16, name: "Derby" },
        { id: 17, name: "Leicester" },
        { id: 18, name: "Brighton" },
        { id: 19, name: "Stoke on Trent" },
        { id: 20, name: "Crewe" },
        { id: 21, name: "Peterborough" },
        { id: 22, name: "Norwich" },
        { id: 23, name: "Gloucester" },
        { id: 24, name: "Swindon" },
        { id: 25, name: "Sunderland" },
        { id: 26, name: "Cambridge" },
        { id: 27, name: "Coventry" },
        { id: 28, name: "Warrington" },
        { id: 29, name: "Manchester" },
        { id: 30, name: "Oldham" },
        { id: 31, name: "Liverpool" },
        { id: 32, name: "Chelmsford" }
      ]
    }
  }

}
</script>

<style scoped lang="scss">
.locksmiths {
  background: #fff8f6;
  a {
    color: $ourBlack;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 400;
    &.active, &:after, &:focus {
      color: $ourBlack;
    }
    &:hover {
      color: $ourRed;
    }
  }
}
ul {
  padding-left: 1rem;
  li {
    list-style-type: '✓';
    text-align: left;
    color: $ourRed;
    padding-left: 10px;
  }
  &.cities li{
    list-style-type: circle;
    color: $ourRed;
  }
}
.btn-primary {
  background-color: $ourRed !important;
  border: none;
  &:focus, :active, :target, :visited {
    border: none;
    box-shadow: none;

  }
  a {
    text-align: center;
  }
}

</style>