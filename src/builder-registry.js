import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import MovieRating from "./views/MovieRating/MovieRating";
import Registration from "./views/Registration/Registration";

Builder.registerComponent(Registration, {
  name: "Registration",
});

Builder.registerComponent(MovieRating, {
  name: "MovieRating",
});

Builder.registerComponent(Counter, {
  name: "Counter",
});
