import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

const URL = "http://www.omdbapi.com/?apikey=71c0d48&s=";

class Gallery extends Component {
  state = {
    results: null
  };

  fetchMovies(query) {
    fetch(`${URL + query}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data");
        }
      })
      .then(responeJSON => {
        const results = responeJSON.Search;
        this.setState({ results: results });
        console.log("state", this.state);
      });
  }

  componentDidMount() {
    this.fetchMovies(this.props.query);
  }

  render() {
    return (
      <Container fluid>
        <h3>{this.props.query}</h3>
        <Row className="row-cols-2 row-cols-md-3 row-cols-xl-6 justify-content-start gy-1 gy-md-2 gx-1 gx-md-2 overflow-x-auto flex-nowrap">
          {this.state.results &&
            this.state.results.map(result => (
              <Col key={result.imdbID} style={{ height: "465px" }}>
                <img src={result.Poster} alt={result.Title} className="img-fluid" />
              </Col>
            ))}
          {/*           <div className="col show">
            <img src="https://occ-0-2528-2581.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR8qDiayt-kOI1KcFfZ46ZA2mcCkORrapFeSWxkkiAdnNb3D1PfhCTg5z1dqIPFErUWx_3kq127LZ2xTneg3ltfcwF-9_8W1Jl0.webp?r=175" alt="" className="img-fluid" />
          </div>
          <div className="col show">
            <img src="https://occ-0-2528-2581.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR8qDiayt-kOI1KcFfZ46ZA2mcCkORrapFeSWxkkiAdnNb3D1PfhCTg5z1dqIPFErUWx_3kq127LZ2xTneg3ltfcwF-9_8W1Jl0.webp?r=175" alt="" className="img-fluid" />
          </div>
          <div className="col show">
            <img src="https://occ-0-2528-2581.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR8qDiayt-kOI1KcFfZ46ZA2mcCkORrapFeSWxkkiAdnNb3D1PfhCTg5z1dqIPFErUWx_3kq127LZ2xTneg3ltfcwF-9_8W1Jl0.webp?r=175" alt="" className="img-fluid" />
          </div>
          <div className="col show">
            <img src="https://occ-0-2528-2581.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR8qDiayt-kOI1KcFfZ46ZA2mcCkORrapFeSWxkkiAdnNb3D1PfhCTg5z1dqIPFErUWx_3kq127LZ2xTneg3ltfcwF-9_8W1Jl0.webp?r=175" alt="" className="img-fluid" />
          </div>
          <div className="col show">
            <img src="https://occ-0-2528-2581.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR8qDiayt-kOI1KcFfZ46ZA2mcCkORrapFeSWxkkiAdnNb3D1PfhCTg5z1dqIPFErUWx_3kq127LZ2xTneg3ltfcwF-9_8W1Jl0.webp?r=175" alt="" className="img-fluid" />
          </div>
          <div className="col show">
            <img src="https://occ-0-2528-2581.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR8qDiayt-kOI1KcFfZ46ZA2mcCkORrapFeSWxkkiAdnNb3D1PfhCTg5z1dqIPFErUWx_3kq127LZ2xTneg3ltfcwF-9_8W1Jl0.webp?r=175" alt="" className="img-fluid" />
          </div>
          <div className="col show">
            <img src="https://occ-0-2528-2581.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR8qDiayt-kOI1KcFfZ46ZA2mcCkORrapFeSWxkkiAdnNb3D1PfhCTg5z1dqIPFErUWx_3kq127LZ2xTneg3ltfcwF-9_8W1Jl0.webp?r=175" alt="" className="img-fluid" />
          </div>
          <div className="col show">
            <img src="https://occ-0-2528-2581.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR8qDiayt-kOI1KcFfZ46ZA2mcCkORrapFeSWxkkiAdnNb3D1PfhCTg5z1dqIPFErUWx_3kq127LZ2xTneg3ltfcwF-9_8W1Jl0.webp?r=175" alt="" className="img-fluid" />
          </div> */}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
