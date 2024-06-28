import { Component } from "react";
import { Container, Row } from "react-bootstrap";

class Gallery extends Component {
  state = {};

  render() {
    return (
      <Container fluid>
        <h3>The Lord of The Rings</h3>
        <Row className="row-cols-2 row-cols-md-3 row-cols-xl-6 justify-content-start gy-1 gy-md-2 gx-1 gx-md-2">
          <div class="col show">
            <img src="https://occ-0-2528-2581.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR8qDiayt-kOI1KcFfZ46ZA2mcCkORrapFeSWxkkiAdnNb3D1PfhCTg5z1dqIPFErUWx_3kq127LZ2xTneg3ltfcwF-9_8W1Jl0.webp?r=175" alt="" class="img-fluid" />
          </div>
          <div class="col show">
            <img src="https://occ-0-2528-2581.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR8qDiayt-kOI1KcFfZ46ZA2mcCkORrapFeSWxkkiAdnNb3D1PfhCTg5z1dqIPFErUWx_3kq127LZ2xTneg3ltfcwF-9_8W1Jl0.webp?r=175" alt="" class="img-fluid" />
          </div>
          <div class="col show">
            <img src="https://occ-0-2528-2581.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR8qDiayt-kOI1KcFfZ46ZA2mcCkORrapFeSWxkkiAdnNb3D1PfhCTg5z1dqIPFErUWx_3kq127LZ2xTneg3ltfcwF-9_8W1Jl0.webp?r=175" alt="" class="img-fluid" />
          </div>
          <div class="col show">
            <img src="https://occ-0-2528-2581.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR8qDiayt-kOI1KcFfZ46ZA2mcCkORrapFeSWxkkiAdnNb3D1PfhCTg5z1dqIPFErUWx_3kq127LZ2xTneg3ltfcwF-9_8W1Jl0.webp?r=175" alt="" class="img-fluid" />
          </div>
          <div class="col show">
            <img src="https://occ-0-2528-2581.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR8qDiayt-kOI1KcFfZ46ZA2mcCkORrapFeSWxkkiAdnNb3D1PfhCTg5z1dqIPFErUWx_3kq127LZ2xTneg3ltfcwF-9_8W1Jl0.webp?r=175" alt="" class="img-fluid" />
          </div>
          <div class="col show">
            <img src="https://occ-0-2528-2581.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR8qDiayt-kOI1KcFfZ46ZA2mcCkORrapFeSWxkkiAdnNb3D1PfhCTg5z1dqIPFErUWx_3kq127LZ2xTneg3ltfcwF-9_8W1Jl0.webp?r=175" alt="" class="img-fluid" />
          </div>
        </Row>
      </Container>
    );
  }
}

export default Gallery;
