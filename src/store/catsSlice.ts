import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICat } from '@/models/ICat'

export interface CatsState {
    cats: ICat[];
    favoriteCats: ICat[];
    isLoading: boolean;
    error: string;
    page: number;
}

const initialState: CatsState = {
    cats: [],
    favoriteCats: [],
    isLoading: false,
    error: '',
    page: 1
}

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<ICat>) => {
            if (state.favoriteCats.some((cat) => cat.id === action.payload.id)) {
                return;
            }
            state.favoriteCats = [...state.favoriteCats, action.payload];
            localStorage.setItem('favoriteCats', JSON.stringify(state.favoriteCats));
        },
        deleteFromFavorites: (state, action: PayloadAction<ICat>) => {
            state.favoriteCats = state.favoriteCats.filter((cat) => cat.id !== action.payload.id);
            localStorage.setItem('favoriteCats', JSON.stringify(state.favoriteCats));
        },
        loadFavoriteCats: (state) => {
            const stored = localStorage.getItem('favoriteCats');
            if (stored && stored !== "[]") {
                state.favoriteCats = JSON.parse(stored);
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCats.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchCats.fulfilled, (state, action: PayloadAction<ICat[]>) => {
            state.isLoading = false;
            state.error = '';
            state.cats = [...state.cats, ...action.payload];
            state.page += 1;
        })
        builder.addCase(fetchCats.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || '';
        })
    }
})

export const fetchCats = createAsyncThunk('cats/fetchCats', async (page: number, thunkAPI) => {
    try {
        const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=20&page=${page}&api_key=live_O2Ylqx0wrgPh5oNKlsqr8qbwGI5kT9y3oDjrGS5GCYItJz2XYa3vNPKWRptjYRQK`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error });
    }
})

export default catsSlice.reducer;
export const { addToFavorites, deleteFromFavorites, loadFavoriteCats } = catsSlice.actions;