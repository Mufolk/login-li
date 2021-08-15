import React from "react";
import {
  Menu,
  Icon,
  Segment,
  Container,
  Button,
  Header,
  Grid,
} from "semantic-ui-react";

import { Link } from "react-router-dom";
import image from "./presentation-image.png";

export default function Presentation() {
  return (
    <Segment inverted vertical center aligned style={{ paddingBottom: 0 }}>
      <Menu large secondary inverted pointing>
        <Menu.Item>
          <Icon name="sidebar"></Icon>
        </Menu.Item>
        <Menu.Menu position="right" inverted style={{ marginRight: 10 }}>
          <Button inverted as={Link} to="/login">
            Login
          </Button>
          <Button inverted as={Link} to="/register">
            Register
          </Button>
        </Menu.Menu>
      </Menu>
      <Container text>
        <Header inverted style={{ textAlign: "center" }} as="h1">
          NutriHealth
        </Header>
        <Header
          inverted
          style={{ textAlign: "center", marginBottom: 50 }}
          as="h2"
        >
          O mercado de healthtechs está para explodir e irá revolucionar o seu
          estilo de vida
        </Header>
      </Container>

      <Grid columns={2} stackable>
        <Grid.Column style={{ paddingBottom: 0 }}>
          <img
            src={image}
            class="ui image huge image-size"
            alt="family eating some vegetables"
          />
        </Grid.Column>
        <Grid.Column>
          <Grid.Row style={{ marginBottom: 28 }}>
            <Container text style={{ fontSize: 20 }}>
              <Header inverted style={{ marginBottom: 10 }} as="h3">
                Tenha uma vida mais saudável
              </Header>
              É por meio dos alimentos que o corpo recebe todos os nutrientes
              necessários para o pleno funcionamento de todos os tecidos, órgãos
              e células. Portanto, para ter uma vida saudável é importante
              prezar por uma nutrição adequada, ingerindo comidas e bebidas
              saudáveis e na quantidade indicada.
            </Container>
          </Grid.Row>
          <Grid.Row style={{ marginBottom: 28 }}>
            <Container text style={{ fontSize: 20 }}>
              <Header inverted style={{ marginBottom: 10 }} as="h3">
                Brasileiros e a nutrição
              </Header>
              Entretanto, a alimentação da grande maioria dos brasileiros é
              pouco saudável. Segundo pesquisa do Ministério da Saúde, apenas
              23,7% da população consome a quantidade de frutas e hortaliças
              recomendada pela Organização Mundial da Saúde (OMS). Além disso,
              37,2% comem alimentos muito gordurosos. Entre os homens, esse
              percentual sobe para 47,2%.
            </Container>
          </Grid.Row>
          <Grid.Row style={{ marginBottom: 28 }}>
            <Container text style={{ fontSize: 20 }}>
              <Header inverted style={{ marginBottom: 10 }} as="h3">
                Brasileiros e a nutrição
              </Header>
              Entretanto, a alimentação da grande maioria dos brasileiros é
              pouco saudável. Segundo pesquisa do Ministério da Saúde, apenas
              23,7% da população consome a quantidade de frutas e hortaliças
              recomendada pela Organização Mundial da Saúde (OMS). Além disso,
              37,2% comem alimentos muito gordurosos. Entre os homens, esse
              percentual sobe para 47,2%.
            </Container>
          </Grid.Row>
          <Grid.Row
            style={{
              paddingBottom: 0,
              marginBottom: 40,
            }}
          >
            <Container text>
              <Button huge primary as={Link} to="/register">
                Venha ser mais saudável
                <Icon
                  name="right arrow"
                  color="white"
                  style={{ marginLeft: 5 }}
                />
              </Button>
            </Container>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
