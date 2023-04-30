import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from "./componet/page/MainPage";
import PostWritePage from "./componet/page/PostWritePage";
import PostViewPage from "./componet/page/PostViewPage";

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
  // 여기서 라우팅을 지정함
    return (
        <BrowserRouter>
            <MainTitleText>라겜의 미니 블로그</MainTitleText>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;