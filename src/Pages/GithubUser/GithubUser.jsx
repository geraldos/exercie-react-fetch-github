import React, { useState, useEffect } from "react";

import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  const [datas, setDatas] = useState({});
  const [username, setUserName] = useState("");

  const onSubmit = (event) => {
    if (event.key === "Enter") {
      setUserName(event.target.value);
    }
  };
  useEffect(() => {
    async function fetchData() {
      const url = `https://api.github.com/users/${username}`;
      const response = await fetch(url);
      const result = await response.json();
      setDatas(result);
    }
    fetchData();
  }, [username]);

  return (
    <div>
      <H1>Search User Github Apps</H1>
      <Div>
        <form>
          <Div>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="type username github and press enter..."
              onKeyPress={onSubmit}
            ></Input>
          </Div>

          <Div>
            <Avatar>
              <img src={datas.avatar_url} alt="avatar"></img>
            </Avatar>
          </Div>

          <Div>
            <H2>{datas.name}</H2>
          </Div>

          <Div>
            <H3>{datas.bio}</H3>
          </Div>

          <Hr />

          <Div>
            <DivArticle>
              <Div>
                <H2Sub>{datas.followers}</H2Sub>
                <H3Sub>Followers</H3Sub>

                <H2Sub>{datas.public_repos}</H2Sub>
                <H3Sub>Repository</H3Sub>

                <H2Sub>{datas.following}</H2Sub>
                <H3Sub>Following</H3Sub>
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
