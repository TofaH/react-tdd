import { Builder } from "@builder.io/react";
import App from "./App";
import Registration from "./components/Registration";
import MovieRating from "./components/MovieRating/MovieRating";

Builder.registerComponent(Registration, {
  name: "Registration",
});

Builder.registerComponent(MovieRating, {
  name: "MovieRating",
});