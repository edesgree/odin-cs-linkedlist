# odin-cs-linkedlist

Linked list exercise:

_LinkedList_ class / factory, which will represent the full list.

_Node_ class / factory, containing a value function and a link to the nextNode, set both as null by default.
Build the following functions in your linked list class:

_append(value)_ adds a new node containing value to the end of the list

_prepend(value)_ adds a new node containing value to the start of the list

_size_ returns the total number of nodes in the list

_head_ returns the first node in the list

_tail_ returns the last node in the list

_at(index)_ returns the node at the given index

_pop_ removes the last element from the list

_contains(value)_ returns true if the passed in value is in the list and otherwise returns false.

_find(value)_ returns the index of the node containing value, or null if not found.

_toString_ represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: `( value ) -> ( value ) -> ( value ) -> null`

**Extra Credit**

_insertAt(value, index)_ that inserts a new node with the provided value at the given index.

_removeAt(index)_ that removes the node at the given index.

_Extra Credit Tip:_ When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.
