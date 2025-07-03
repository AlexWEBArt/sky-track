import styles from './flightFilters.module.css'

interface Props {
    filters: Set<string>
    activeFilter: string
    setActiveFilter: (filter: string) => void
}

export function FlightFilters({ filters, activeFilter, setActiveFilter }: Props) {

    return (
        <div className={styles.outer_container}>
            <select
                className={styles.filters_select}
                name="filters"
                value={activeFilter}
                onChange={e => setActiveFilter(e.target.value)}
            >
                {
                    Array.from(filters).map(filter => (
                        <option
                            key={filter}
                            className={styles.filter_option}
                            value={filter}
                        >
                            {filter}
                        </option>))
                }
            </select>
        </div>

    )
}