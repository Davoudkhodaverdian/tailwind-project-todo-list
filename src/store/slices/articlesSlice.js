import { createSlice } from '@reduxjs/toolkit'

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
      articles: [],
      editedValues:{}
    },
    reducers: {
        setArticles:  (state, action) => {
            state.articles = action.payload
        },
        addArticle:  (state, action) => {
            state.articles.push(action.payload) 
        },
        editArticle: (state, action) => {
            let dataChanged = action.payload
            let data = state.articles.map(item => {
              
              if (item.id === dataChanged.id) {
                ["body", "creator", "title"].forEach(nameItem => {
                  item[nameItem] = (nameItem === "userPassword"|| nameItem === "id") ? item[nameItem] : dataChanged[nameItem]
                })
              }
              return item
            })
            state.articles = data
          },
        removeArticle:  (state, action) => {
            state.articles = state.articles.filter(item => item.id !== action.payload);
        },
        setEditedValues:  (state, action) => {
            state.editedValues = action.payload;
        },
    }

});

export const { setArticles,addArticle,editArticle,removeArticle,setEditedValues } = articlesSlice.actions

export default articlesSlice.reducer;