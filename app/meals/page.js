import Link from 'next/link';

import MealsGrid from '@/components/meals/meals-grid.component';

import classes from './meals.module.css';
import { getMeals } from '@/lib/meals';

const Meals = async () => {
    const meals = await getMeals();
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favouritye recipe and cook it yourself. It is easy and fun!</p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>Share Your Favourite Recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    );
};

export default Meals;
