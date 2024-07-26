const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODljZjc5NmRmN2RiYWM3ZjMzZTBhOGFlZTY1NWMwZiIsIm5iZiI6MTcyMTkwMzMzOS43NDgyOTMsInN1YiI6IjY2YTIyMTk0YjFmNTFkYjI5NTcwODRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mYCuNlHu4WpDC_OSRitDvQxkaq9HL4KSOG5LLg9I6TI'
    }
  };

  let moviesData=[]
  // TMDB API Fetch
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => { 
      console.log(response)
      console.log(response.results)
      moviesData = response.results

      console.log(makeCard());
      // let results = response['Object']['results']
      // result.forEach((a) => {
      //   let movie_title = a['title']
      //   let movie_poster_path = a['poster_path']
      //   let movie_vote_average = a['vote_average']
      //   let movie_overview = a['overview']
      //   let temp_html = `
      //   <li>${movie_title}
      //   ${movie_poster_path}
      //   ${movie_vote_average}
      //   ${movie_overview}
      //   `
      //   $('#c1')
      // });
    })
    .catch(err => console.error(err));

  // makeCard함수 만들기; 카드에 내용불러와서 만들기 
function makeCard() {
  for (let i = 0; i < moviesData.length; i++) {
    let card = document.createElement("div")
    card.setAttribute("class", "card")
    card.innerHTML = `
      <h4 id="title">${moviesData[i].title}</h4>
      <img src="https://image.tmdb.org/t/p/w500${moviesData[i].poster_path}" alt="${moviesData[i].title}">
      <p id="overview">${moviesData[i].overview}</p>
      <p id="vote">평점: ${moviesData[i].vote_average}</p>
    `
    let cardList = document.querySelector(".cardList")
    cardList.append(card)
  }
}
  // console.log(moviesData);
  // return moviesData[0].title;
    



// 🟡4-5. 영화 클릭하면 영화id alert(답 아님)
// alert(`영화id: ${영화id}`);

// 🟡4-6. 영화제목 검색 구현하기
// 1) 영화 카드리스트 선택하기
// 2) 입력값에 따라서 포함여부 확인