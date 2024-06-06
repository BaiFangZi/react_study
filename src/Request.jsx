import React, { useState, useEffect } from 'react';

function App () {
  const [data, setData] = useState({
    products: [{
      productId: '123',
      productName: 'macbook'
    }]
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    // 定义请求函数
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await fetch(
          'https://www.baidu.com/',
        );

        setData(result.data);
      } catch (e) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    // 执行请求
    fetchData();
  }, []);  // 依赖项传入空数组，渲染时执行（没有clearup）

  return (
    <div>
      {isError && <div>出错了...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.products.map(i => (
            <li key={i.productId}>
              {i.productName}
            </li>
          ))}
        </ul>
      )};
    </div>
  )

}

export default App;