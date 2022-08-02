import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Oven Roasted Crispy Pork Belly',
      'This is simply a test',
      'https://pinchandswirl.com/wp-content/uploads/2020/10/Crispy-Pork-Belly_square.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F31%2F16354-easy-meatloaf-mfs-74-1x1-1.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
