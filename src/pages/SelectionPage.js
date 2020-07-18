import React from 'react'
import { Link } from 'react-router-dom';

export const SelectionPage = () => {
    return (
        <div id='selection'>
            <div>
                <section>
                    <Link to='/mesero'>
                        <button>Mesero</button>
                    </Link>
                </section>
                <section>
                    <Link to='/cocinero'>
                        <button>Cocinero</button>
                    </Link>
                </section>
            </div>
        </div>
    );
}
