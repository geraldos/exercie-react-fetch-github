import React, { useState } from "react";

import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

const DivValue = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

const H1 = styled.h1`
  text-align: center;
  font-family: "Quicksand", sans-serif;
`;

const H2 = styled.h2`
  text-align: center;
  font-family: "Quicksand", sans-serif;
`;

const H2Sub = styled.h2`
  text-align: center;
  font-family: "Quicksand", sans-serif;
  padding-left: 30px;
`;

const H3Sub = styled.h3`
  text-align: center;
  font-family: "Quicksand", sans-serif;
  padding-left: 30px;
`;

const H3 = styled.h3`
  text-align: center;
  font-family: "Quicksand", sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  text-align: center;
`;

const Avatar = styled.div`
  & img {
    height: 200px;
    width: 200px;
    border-radius: 100%;
    margin: 0 auto;
  }
`;

const DivArticle = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const Hr = styled.hr`
  display: flex;
  flex-wrap: wrap;
  border: 5px solid grey;
  border-radius: 5px;
  width: 100%;
`;

function GithubUser() {
  const [name, setName] = useState("");
  const [data, setData] = useState({});

  function handleChange(event) {
    setName(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const url = `https://api.github.com/users/${name}`;
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
  }

  return (
    <div>
      <H1>Search User Github Apps</H1>
      <Div>
        <form onSubmit={handleSubmit}>
          <Div>
            <Input
              type="text"
              name="name"
              id="username"
              value={name}
              placeholder="type username github and press enter..."
              onChange={handleChange}
            ></Input>
          </Div>

          <Div>
            <Avatar>
              <img src={data.avatar_url} alt="avatar"></img>
            </Avatar>
          </Div>

          <Div>
            <H2>{data.name}</H2>
          </Div>

          <Div>
            <H3>{data.bio}</H3>
          </Div>

          <Hr />

          <Div>
            <DivArticle>
              <Div>
                <DivValue>
                  <H3Sub>Followers</H3Sub>
                  <H2Sub>{data.followers}</H2Sub>
                </DivValue>

                <DivValue>
                  <H3Sub>Repository</H3Sub>
                  <H2Sub>{data.public_repos}</H2Sub>
                </DivValue>

                <DivValue>
                  <H3Sub>Following</H3Sub>
                  <H2Sub>{data.following}</H2Sub>
                </DivValue>
              </Div>
            </DivArticle>
          </Div>

          <Hr />
        </form>
      </Div>
    </div>
  );
}

export default GithubUser;
