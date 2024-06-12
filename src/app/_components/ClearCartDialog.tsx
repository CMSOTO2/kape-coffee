import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useShoppingCart } from "use-shopping-cart";

export function ClearCartDialog() {
  const { clearCart } = useShoppingCart();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-red-600">
          Clear cart
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="pr-4">
            Are you sure you want to delete all the items in your Shopping Cart?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <div className="flex w-full flex-col gap-4">
              <Button type="button" variant="destructive" onClick={clearCart}>
                Delete
              </Button>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
