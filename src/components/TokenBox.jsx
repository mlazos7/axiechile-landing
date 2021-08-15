import React from "react";
import { useEffect, useState } from "react";
import { geckoBaseUrl } from "../const/url";
import styled from "styled-components";

const TokenBoxStyle = styled.div`
  display: flex;
  justify-content: center;


  .element {
    display: flex;
    align-items: center;
    p {
      padding: 0 20px 0 3px;
      font-size: 12px;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const TokenBox = () => {
  const tokens = ["axie-infinity", "smooth-love-potion", "ethereum"];
  const [tokenInfo, setTokenInfo] = useState([]);

  const params = {
    localization: false,
    market_data: false,
    community_data: false,
    developer_data: false,
  };

  useEffect(() => {
    tokens.forEach((token) => {
      var url = new URL(`${geckoBaseUrl}/${token}`);
      url.search = new URLSearchParams(params).toString();
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            setTokenInfo((tokenInfo) => [
              ...tokenInfo,
              {
                image: result.image,
                tickers: result.tickers.filter(
                  (item) =>
                    item.target === "USDT" &&
                    item.market.identifier === "binance"
                )[0],
                symbol: result.symbol,
              },
            ]);
          },

          (error) => {
            setTokenInfo({
              error,
            });
          }
        );
    });
  }, []);

  return (
    <TokenBoxStyle>
      {tokenInfo.map((item, index) => (
        <div className="element" key={index}>
          <img src={item.image.large} alt={item.symbol} />
          <p>${item.tickers.last.toFixed(2)}</p>
        </div>
      ))}
    </TokenBoxStyle>
  );
};
