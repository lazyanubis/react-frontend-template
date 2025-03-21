import { useBearStore } from '@/stores/bear';

export default function Test2() {
    const bears = useBearStore((state) => state.bears);
    return (
        <>
            <div>{`bears: ${bears}`}</div>
        </>
    );
}
